"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon } from "@/components/icons"

interface Column<T> {
  key: keyof T | string
  header: string
  render?: (item: T) => React.ReactNode
  className?: string
}

interface DataTableProps<T extends { id: string }> {
  title: string
  description?: string
  data: T[]
  columns: Column<T>[]
  onAdd?: () => void
  onEdit?: (item: T) => void
  onDelete?: (item: T) => void
  onView?: (item: T) => void
  isLoading?: boolean
  emptyMessage?: string
}

export function DataTable<T extends { id: string }>({
  title,
  description,
  data,
  columns,
  onAdd,
  onEdit,
  onDelete,
  onView,
  isLoading,
  emptyMessage = "Aucune donnée disponible",
}: DataTableProps<T>) {
  return (
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
      <div className="p-6 border-b border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        {onAdd && (
          <Button onClick={onAdd} className="gap-2">
            <PlusIcon className="h-4 w-4" />
            Ajouter
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="p-12 text-center">
          <div className="w-8 h-8 border-4 border-foreground/20 border-t-foreground rounded-full animate-spin mx-auto" />
        </div>
      ) : data.length === 0 ? (
        <div className="p-12 text-center text-muted-foreground">{emptyMessage}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className={cn(
                      "px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider",
                      column.className,
                    )}
                  >
                    {column.header}
                  </th>
                ))}
                {(onEdit || onDelete || onView) && (
                  <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {data.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="hover:bg-muted/30 transition-colors"
                >
                  {columns.map((column) => (
                    <td key={String(column.key)} className={cn("px-6 py-4 text-sm text-foreground", column.className)}>
                      {column.render ? column.render(item) : String(item[column.key as keyof T] ?? "")}
                    </td>
                  ))}
                  {(onEdit || onDelete || onView) && (
                    <td className="px-6 py-4 text-right space-x-2">
                      {onView && (
                        <button
                          onClick={() => onView(item)}
                          className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                          title="Voir"
                        >
                          <EyeIcon />
                        </button>
                      )}
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                          title="Modifier"
                        >
                          <PencilIcon />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                          title="Supprimer"
                        >
                          <TrashIcon />
                        </button>
                      )}
                    </td>
                  )}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
