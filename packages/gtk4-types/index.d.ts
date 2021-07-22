declare module "gi://Gdk" {
  export * from "@gi-types/gdk4";
}

declare module "gi://Gdk?version=4.0" {
  export * from "gi://Gdk";
}

declare module "gi://Graphene" {
  export * from "@gi-types/graphene1";
}

declare module "gi://Graphene?version=1.0" {
  export * from "gi://Graphene";
}

declare module "gi://Gtk" {
  export * from "@gi-types/gtk4";
}

declare module "gi://Gtk?version=4.0" {
  export * from "gi://Gtk";
}

declare module "gi://Gsk" {
  export * from "@gi-types/gtk4";
}

declare module "gi://Gsk?version=4.0" {
  export * from "gi://Gsk";
}

declare interface GjsGiImports {
  Graphene: typeof import("@gi-types/graphene1");
  Gdk: typeof import("@gi-types/gdk4");
  Gtk: typeof import("@gi-types/gtk4");
  Gsk: typeof import("@gi-types/gsk4");
}
