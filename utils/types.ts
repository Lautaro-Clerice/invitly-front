export interface Category {
  id: string;
  key: string;
  display_name: string;
  description: string;
  cover_image_url: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
export interface Template {
  id: string;
  name: string;
  display_name: string;
  category: Category;
  preview_url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
