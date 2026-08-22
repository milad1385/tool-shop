"use server";

import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export type UploadResult = {
  success: boolean;
  url: string;
  error?: string;
};

export type UploadMultipleResult = {
  success: boolean;
  urls: string[];
  errors?: string[];
};

export async function uploadFile(
  file: File,
  folder: string = "uploads",
): Promise<UploadResult> {
  try {
    if (!file || file.size === 0) {
      return {
        success: false,
        url: "",
        error: "فایل انتخاب نشده است",
      };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name);
    const filename = `${randomUUID()}${ext}`;
    const uploadDir = path.join(process.cwd(), "public", folder);

    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    const url = `/${folder}/${filename}`;

    return {
      success: true,
      url,
    };
  } catch (error) {
    console.error("خطا در آپلود فایل:", error);
    return {
      success: false,
      url: "",
      error: "خطا در آپلود فایل",
    };
  }
}

export async function uploadMultipleFiles(
  files: File[],
  folder: string = "uploads",
): Promise<UploadMultipleResult> {
  try {
    const results: string[] = [];
    const errors: string[] = [];

    for (const file of files) {
      const result = await uploadFile(file, folder);

      if (result.success && result.url) {
        results.push(result.url);
      } else {
        errors.push(result.error || `خطا در آپلود ${file.name}`);
      }
    }

    return {
      success: results.length > 0,
      urls: results,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    console.error("خطا در آپلود فایل‌ها:", error);
    return {
      success: false,
      urls: [],
      errors: ["خطا در آپلود فایل‌ها"],
    };
  }
}

export async function deleteFile(filePath: string): Promise<boolean> {
  try {
    const fs = await import("fs/promises");
    const fullPath = path.join(process.cwd(), "public", filePath);
    await fs.unlink(fullPath);
    return true;
  } catch (error) {
    console.error("خطا در حذف فایل:", error);
    return false;
  }
}
