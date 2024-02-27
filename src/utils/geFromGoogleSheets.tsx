import axios from "axios"
import {useEffect, useState} from "react"

export const getFromGoogleSheets = (tableName: string) => {
  const apiKey = "AIzaSyDUWS_3nDunYCHjO_FznDxHOqx9blUfLW8"
  const spreadsheetId = "1p_BTELRVioBi_Vvzo7Mq_hunlPqZP8C44Kr0oo_tbT4"

  const [data, setData] = useState<[string, string][]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${tableName}?key=${apiKey}`,
      )
      .then((response) => {
        setData(response.data.values.slice(1))
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])

  return {data, loading}
}
