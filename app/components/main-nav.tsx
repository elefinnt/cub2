"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Logo } from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

interface Route {
  href: string;
  label: string;
  subRoutes?: Route[];
}

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const params = useParams();
  const pathname = usePathname();

  const routes: Route[] = [
    {
      href: "/solutions",
      label: "Solutions",
      subRoutes: [
        {
          href: "/data",
          label: "Data",
        },
        {
          href: "/artificalintelligence",
          label: "Artificial Intelligence",
        },
        {
          href: "/automation",
          label: "Automation",
        },
        {
          href: "/blockchain",
          label: "Blockchain",
        },
        {
          href: "/extendedreality",
          label: "Extended Reality",
        },
        {
          href: "/internetofthings",
          label: "Internet Of Things",
        },
      ],
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/industries",
      label: "Industries",
    },
    {
      href: "/company",
      label: "Company",
    },
    {
      href: "/thinking",
      label: "Our Thinking",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      {routes.map((route: Route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-[17px] transition-colors hover:text-[#ffd12d] py-[10px] px-5"
          )}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{route.label}</NavigationMenuTrigger>
                <NavigationMenuContent className="border border-red-500 ">
                  <NavigationMenuLink>
                    {route.subRoutes?.map((subRoute: Route) => (
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>
                              {subRoute.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <NavigationMenuLink></NavigationMenuLink>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    ))}
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Link>
      ))}
    </div>

    // <>
    //   <nav
    //     className={cn(
    //       "flex items-center justify-center text-white ",
    //       className
    //     )}
    //   >
    //     {routes.map((route) => (
    //       <Link
    //         key={route.href}
    //         href={route.href}
    //         className={cn(
    //           "text-[17px] transition-colors hover:text-[#ffd12d] py-[10px] px-5"
    //         )}
    //       >
    //         {route.label}
    //       </Link>
    //     ))}
    //   </nav>
    // </>
  );
}
