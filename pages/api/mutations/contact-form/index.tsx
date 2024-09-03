import apiClient from "@/pages/api"
import { z } from "zod"
import { useMutation } from "react-query"

export const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Ad soyad bilgisi giriniz.",
  }),
  email: z.string().email({
    message: "Geçerli bir e-posta adresi giriniz.",
  }),
  phone: z.string().min(1, {
    message: "Geçerli bir telefon numarası giriniz.",
  }),
  message: z.string().min(1, {
    message: "Firma adı giriniz.",
  }),
  kvkk: z.boolean(),
})

type FormData = z.infer<typeof FormSchema>

async function submitForm(data: FormData) {
  const response = await apiClient.post("/message.php", data)
  return response.data
}

export function useSubmitForm() {
  return useMutation(submitForm, {
    retry: 2,
  })
}
