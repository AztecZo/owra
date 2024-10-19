import s from "./form-contact.module.scss"

import { zodResolver } from "@hookform/resolvers/zod"
import cx from "clsx"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { FormSchema, useSubmitForm } from "@/api/mutations/contact-form"
import { Button } from "@/components/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/utility/form"
import { Input } from "@/components/utility/input"
import { LoadingSpinner } from "@/components/utility/loading-spinner"
import { Textarea } from "@/components/utility/textarea"
import { FormType } from "@/types"
import { useEffect, useState } from "react"

export interface FormContactProps {
  theme?: "blue" | "white"
  formType: FormType
}

export default function FormContact(props: FormContactProps) {
  const { theme = "blue", formType } = props

  const [responseMessage, setResponseMessage] = useState("")

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      kvkk: false,
      formType,
    },
  })

  const { mutate, isLoading, data: responseData } = useSubmitForm()

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(data)
  }

  useEffect(() => {
    if (!responseData?.message) return
    setResponseMessage(responseData?.message)
    form.reset()
  }, [responseData, form])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (responseMessage) {
      timeout = setTimeout(() => setResponseMessage(""), 10000)
    }

    return () => clearTimeout(timeout)
  }, [responseMessage])

  return (
    <div className={cx(s.formContact, [s[theme]])}>
      <div className="flex-1">
        <Form {...form}>
          <form className={s.form} onSubmit={form.handleSubmit(onSubmit)}>
            <div
              className={cx(s.fieldC, {
                [s.error]: form.formState.errors.name,
              })}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className={s.formItem}>
                    <FormControl>
                      <Input className={cx(s.input, s.border)} placeholder="YOUR NAME" {...field} />
                    </FormControl>
                    <FormMessage className={s.formMessage} />
                  </FormItem>
                )}
              />
            </div>

            <div
              className={cx(s.fieldC, {
                [s.error]: form.formState.errors.email,
              })}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={s.formItem}>
                    <FormControl>
                      <Input className={cx(s.input, s.border)} placeholder="YOUR EMAIL ADDRESS" {...field} />
                    </FormControl>
                    <FormMessage className={s.formMessage} />
                  </FormItem>
                )}
              />
            </div>

            <div
              className={cx(s.fieldC, {
                [s.error]: form.formState.errors.phone,
              })}
            >
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className={s.formItem}>
                    <FormControl>
                      <Input className={cx(s.input, s.border)} placeholder="YOUR PHONE NUMBER" {...field} />
                    </FormControl>
                    <FormMessage className={s.formMessage} />
                  </FormItem>
                )}
              />
            </div>

            <div
              className={cx(s.fieldC, {
                [s.error]: form.formState.errors.message,
              })}
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className={s.formItem}>
                    <FormControl>
                      <Textarea
                        className={cx(s.input, s.textarea, s.border)}
                        placeholder="HOW CAN WE HELP?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className={s.formMessage} />
                  </FormItem>
                )}
              />
            </div>

            <button
              className={cx(s.submitBtn, "flex items-center justify-center")}
              type="submit"
              disabled={!form.formState.isValid}
            >
              <Button theme={theme}>
                {isLoading ? (
                  <div className={s.spinnerC}>
                    <LoadingSpinner />
                  </div>
                ) : (
                  <span>Gönder</span>
                )}
              </Button>
            </button>
          </form>
        </Form>
        {responseMessage && <div className={s.response}>{responseMessage}</div>}
      </div>
    </div>
  )
}
