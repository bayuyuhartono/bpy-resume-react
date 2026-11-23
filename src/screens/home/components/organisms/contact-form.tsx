import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { ArrowCircle } from "@/components/atoms/arrow-circle"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PROJECT_TYPE_OPTIONS, TIMELINE_OPTIONS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { contactSchema, type ContactFormValues } from "../../schemas/contact-schema"

/** Field bergaya garis bawah sesuai design. */
const FIELD_CLASS =
  "h-auto min-h-11 w-full rounded-none border-0 border-b border-input bg-transparent px-0 py-3 text-[15px] shadow-none focus-visible:border-primary-text focus-visible:ring-0 dark:bg-transparent md:text-[15px]"
const LABEL_CLASS = "type-label text-label-xs text-subtle-foreground md:text-label-sm"

export type ContactFormProps = {
  onSubmit: (values: ContactFormValues) => void
  isSubmitting?: boolean
  defaultValues?: Partial<ContactFormValues>
}

export function ContactForm({ onSubmit, isSubmitting = false, defaultValues }: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: PROJECT_TYPE_OPTIONS[0],
      timeline: TIMELINE_OPTIONS[0],
      message: "",
      ...defaultValues,
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="grid gap-5.5 md:grid-cols-2 md:gap-x-8 md:gap-y-7"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="gap-1">
              <FormLabel className={LABEL_CLASS}>Full name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  autoComplete="name"
                  className={FIELD_CLASS}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="gap-1">
              <FormLabel className={LABEL_CLASS}>Email *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  className={FIELD_CLASS}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem className="gap-1">
              <FormLabel className={LABEL_CLASS}>Project type *</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className={cn(FIELD_CLASS, "data-[size=default]:h-auto")}>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PROJECT_TYPE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem className="gap-1">
              <FormLabel className={LABEL_CLASS}>Timeline</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className={cn(FIELD_CLASS, "data-[size=default]:h-auto")}>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TIMELINE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="gap-1 md:col-span-2">
              <FormLabel className={LABEL_CLASS}>Tell me about it *</FormLabel>
              <FormControl>
                <Textarea
                  rows={3}
                  placeholder="What are you building, and where can I help?"
                  className={cn(FIELD_CLASS, "min-h-20 resize-y")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="pill"
          size="pill-lg"
          disabled={isSubmitting}
          className="w-full md:col-span-2"
        >
          Send message
          {isSubmitting ? (
            <Loader2 data-icon="inline-end" className="mr-2 size-4 animate-spin" />
          ) : (
            <ArrowCircle tone="inverse" size="lg" />
          )}
        </Button>
      </form>
    </Form>
  )
}
