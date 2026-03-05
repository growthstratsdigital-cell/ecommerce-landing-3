import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uutxbyxgpefvboevshkc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dHhieXhncGVmdmJvZXZzaGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTM1OTYsImV4cCI6MjA4NzY4OTU5Nn0.HmOa6AlhLrngU5C7zhmALj5bEJmVO0kj-ctYm_HEqcw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
