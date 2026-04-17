#!/bin/bash
SUPABASE_URL="https://kpjnhahxlbkunbplcxve.supabase.co"
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwam5oYWh4bGJrdW5icGxjeHZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyOTA1NzQsImV4cCI6MjA3OTg2NjU3NH0.eU6SBpe0BUVNSVupdG68e1nvtQdbzNWdxwUhNOWt5nw"

echo "Checking zs_disputes table..."
curl -s -H "apikey: $SUPABASE_KEY" -H "Authorization: Bearer $SUPABASE_KEY" "$SUPABASE_URL/rest/v1/zs_disputes?select=id,title&limit=5"
echo ""
