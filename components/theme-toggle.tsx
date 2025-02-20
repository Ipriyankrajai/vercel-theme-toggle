"use client"

import * as React from "react"
import { Moon, Sun, Laptop, LucideIcon } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeIcon = ({ icon: Icon }:{icon:LucideIcon}) => (
  <Icon className="h-4 w-4" />
)

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

    return (
    <fieldset className="inline-flex items-center justify-center rounded-md border dark:border-gray-700 p-1">
      <legend className="sr-only">Select a display theme:</legend>
      {[
        { value: 'system', icon: Laptop },
        { value: 'light', icon: Sun },
        { value: 'dark', icon: Moon },
      ].map(({ value, icon }) => (
        <span key={value} className="px-1">
          <input
            type="radio"
            id={`theme-${value}`}
            name="theme"
            value={value}
            checked={theme === value}
            onChange={() => setTheme(value)}
            className="sr-only"
          />
          <label
            htmlFor={`theme-${value}`}
            className={`inline-flex cursor-pointer rounded-sm p-1 hover:bg-gray-100 dark:hover:bg-gray-800 ${
              theme === value ? 'bg-gray-200 dark:bg-gray-700' : ''
            }`}
          >
            <span className="sr-only">{value}</span>
            <ThemeIcon icon={icon} />
          </label>
        </span>
      ))}
    </fieldset>
  )
}