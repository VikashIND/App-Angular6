export const menuItemsList: any[] = [
  { label: "Home", routerLink: "/", icon: "pi pi-fw pi-home" },
  {
    label: "File",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-plus",
        items: [
          { label: "Project", routerLink: "/aboutus" },
          { label: "Other", routerLink: "/contactus" }
        ]
      },
      { label: "Open" },
      { label: "Quit" }
    ]
  },
  {
    label: "Form",
    items: [
      {
        label: "Sign-Up Form",
        routerLink: "/reactiveForm"
      },
      {
        label: "Employees List",
        routerLink: "/employees"
      },
      {
        label: "Login",
        routerLink: "/loginNew"
      },
      {
        label: "Category Master",
        routerLink: "/category"
      }
    ]
  },
  {
    label: "Edit",
    icon: "pi pi-fw pi-pencil",
    items: [
      { label: "Delete", icon: "pi pi-fw pi-trash" },
      { label: "Refresh", icon: "pi pi-fw pi-refresh" }
    ]
  },
  {
    label: "Templates",
    items: [
      { label: "Template2x2", routerLink: "/Template2x2" },
      { label: "Template3x3", routerLink: "/Template3x3" },
      { label: "Template4x4", routerLink: "/template4x4" },
      { label: "Template5x5", routerLink: "/template5x5" }
    ]
  },
  {
    label: "Books",
    items: [
      { label: "Book List", routerLink: "/book" },
      { label: "Add Book", routerLink: "/addbook" },
      { label: "Edit Book", routerLink: "/editbook" }
    ]
  },
  {
    label: "Users",
    items: [
      { label: "Create User", routerLink: "/createUser" },
      { label: "Users", routerLink: "/users" },
      { label: "Users List", routerLink: "/userslist" }
    ]
  },
  {
    label: "Server",
    items: [
      { label: "Server", routerLink: "/server" },
      { label: "Add Servers", routerLink: "/servers" }
    ]
  },
  { label: "About Us", routerLink: "/aboutus" },
  { label: "Contact Us", routerLink: "/contactus" }
  // { label: "PrintNg Test", routerLink: "/primeTest" }
];
