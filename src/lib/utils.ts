import { createCn } from "cn/config"

/**
 * `cn` dengan skala font custom dari src/index.css (@theme). Tanpa ini, class seperti
 * `text-label-sm` dianggap warna dan bentrok dengan `text-primary-text`, sehingga salah satunya
 * terbuang saat merge.
 */
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "label",
            "label-sm",
            "label-xs",
            "display-hero",
            "display-1",
            "display-2",
            "display-3",
            "display-contact",
            "display-stat",
            "display-footer",
            "display-404",
          ],
        },
      ],
    },
  },
})
