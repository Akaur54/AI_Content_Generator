"use client"; // Add this at the top of the file

import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';

import {eq} from "drizzle-orm"

export interface HistoryDataType {
  id: number;
  FormData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}

export async function fetchHistoryData(userEmail: string): Promise<HistoryDataType[]> {
  const result = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, userEmail)) // Filter by user email
    .execute();
  return result.map((item) => ({
    id: item.id,
    FormData: item.FormData,
    aiResponse: item.aiResponse ?? null,
    templateSlug: item.templateSlug,
    createdBy: item.createdBy,
    createdAt: item.createdAt ?? null,
  }));
}
