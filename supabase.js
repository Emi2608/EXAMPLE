
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vgeantwhtcpabxvvvnab.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnZWFudHdodGNwYWJ4dnZ2bmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjM0MzYsImV4cCI6MjA1OTEzOTQzNn0.fDHJGPoTrcWoQ6madPVqooLND01B-1smQlOFvHLtMjE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
