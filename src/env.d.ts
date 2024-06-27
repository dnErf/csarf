/// <reference types="astro/client" />

import type { SupabaseClient } from "@supabase/supabase-js";

declare namespace App {
    interface Locals {
        supabaseSsr: SupabaseClient
    }
}
