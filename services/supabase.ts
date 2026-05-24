// ไฟล์ที่ใช้ตั้งค่าการเชื่อมต่อไปยัง Supabase ซึ่งต้องใช้ URL และ KEY ของ Supabase

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qqfexkeymnesmtpknych.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZmV4a2V5bW5lc210cGtueWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NjExMzAsImV4cCI6MjA5NDUzNzEzMH0.GlBeNA27Elibm7Jr6KeeoGn0qDwQ1F_dREKgcA7i8aY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
