"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { AlertDialog } from '@/components/ui/alert-dialog'
import { useRouter } from 'next/navigation'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
const moment = require('moment')


interface PROPS{
    params:{
        'template-slug' : string
    }
}

function CreateNewContent(props:PROPS) {

    const selectTemplate : TEMPLATE | undefined = templates?.find((item) => item.slug == props.params['template-slug']);

    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('')
    const {user} = useUser()
    const router = useRouter(); 
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)
    
    /**
     * 
     * @param FormData 
     * @returns 
     */
    const GenerateAIContent=async(FormData:any) => {
      if(totalUsage >= 10000 && !userSubscription){
        <AlertDialog>Please Upgrade</AlertDialog>
        router.push('/dashboard/billing')
        return ;
      }
      setLoading(true);
      const SelectedPrompt = selectTemplate?.aiPrompt;

      const FinalAIPrompt = JSON.stringify(FormData) + ", " + SelectedPrompt;

      const Result = await chatSession.sendMessage(FinalAIPrompt);

      // console.log(Result.response.text());
      setAiOutput(Result?.response.text());
      await SaveInDb(FormData, selectTemplate?.slug, Result?.response.text())
      setLoading(false);

      setUpdateCreditUsage(Date.now())
    }

    const SaveInDb = async (FormData: string, slug: string | undefined, aiResp: string) => {
      const result = await db.insert(AIOutput).values({
        FormData: FormData,
        templateSlug: slug || '',
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress || '',
        createdAt: moment().format('DD/MM/YYYY'),
      });
  
      console.log(result);
    };

  return (
    <div className='p-10'>
        <Link href={"/dashboard"}>
        <Button> <ArrowLeft/> Back</Button>
        </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
      <FormSection selectTemplate={selectTemplate}
      userFormInput={(v:any) => GenerateAIContent(v)}
      loading = {loading}
      />
      <div className='col-span-2'>
      <OutputSection aiOutput={aiOutput}/>
      </div>

    </div>

    </div>
  )
}

export default CreateNewContent
