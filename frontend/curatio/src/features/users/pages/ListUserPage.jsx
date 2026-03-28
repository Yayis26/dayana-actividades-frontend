import DataTable from "@/shared/components/DataTable"
import { UserColumns } from "../table/UserColumns"
import { users } from "@/data/user/users"
import { Button } from "../../../shared/components"
import ReportConfigModal from "../reports/components/ReportConfigModal"
import {useState} from "react";

export default function ListUserPage() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)

  return (
    <div className="p-6">

      <div className=" items-center justify-between mb-4">

      <h1 className="text-xl font-semibold mb-4">
        Usuarios
      </h1>
    
    <Button 
      variant = "primary"
      onClick={() => setIsReportModalOpen(true)}
    >
      Generar reporte 
    </Button>

      <DataTable
        data={users}
        columns={UserColumns}
      />
    <ReportConfigModal
      isOpen={isReportModalOpen}
      onClose={() => setIsReportModalOpen(false)}
    />
    </div>
    </div>
  )
}

