/* eslint-disable security/detect-object-injection */
import { pagesName } from "../routes"

export const getPageName = (path) => pagesName[path]

export const getBreadcrumbs = (pathname) => {
  const breadcrumbs = [
    {
      link: "/",
      name: pagesName["/"],
    },
  ]

  const paths = pathname.split("/")

  paths.forEach((path, index) => {
    if (index === 0) {
      return
    }
    const breadcrumb = {
      link: `/${path}`,
      name: pagesName[`/${path}`],
    }
    breadcrumbs.push(breadcrumb)
  })

  return breadcrumbs
}
