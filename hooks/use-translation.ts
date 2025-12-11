"use client"

import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/translations"

export function useTranslation() {
  const { locale } = useLocale()
  const t = translations[locale]
  
  return { t, locale }
}
