import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ncfdygrggazlflwivsyf.supabase.co";
const supabaseKey = "sb_publishable_lEwUQ-LessHQIuTwN1b7Dg_vw1P2YLC";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
        