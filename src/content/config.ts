import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(), // Sử dụng chuỗi định dạng YYYY-MM-DD
    coverImage: z.string(),
    category: z.enum(['thuc_an', 'vat_pham', 'sach', 'phu_kien']),
    tags: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  blog: blogCollection,
};
