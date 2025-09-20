"use client"

import { Heart, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileDock() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-50/95 backdrop-blur-md border-t-2 border-slate-300 shadow-xl">
      <div className="flex items-center justify-around py-3 px-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center gap-1 h-auto py-3 px-4 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 hover:text-slate-900"
          onClick={() => (window.location.href = "/services/shelter")}
        >
          <Heart className="h-5 w-5" />
          <span className="text-xs leading-tight text-center">
            保護犬猫
            <br />
            ふれあい
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center gap-1 h-auto py-3 px-4 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 hover:text-slate-900"
          onClick={() => (window.location.href = "/services/trimming")}
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs leading-tight text-center">
            トリミング・
            <br />
            一時預かり
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center gap-1 h-auto py-3 px-4 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 hover:text-slate-900"
          onClick={() => (window.location.href = "/services/btype")}
        >
          <Users className="h-5 w-5" />
          <span className="text-xs">B型見学</span>
        </Button>
      </div>
    </div>
  )
}
