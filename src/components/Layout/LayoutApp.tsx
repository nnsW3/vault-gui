import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  DropdownMenuControlled,
  NavAsideBetaTypeformMobile,
  NavAsideContent,
  Navbar,
  Stack,
  styledNavButton,
  styledTrigger,
} from "src/components";

interface Props {
  children?: React.ReactNode;
  renderNavMobile: boolean;
}

/* 
  General app layout for a logged in user.
  NB! The Child component must *always* be LayoutPage.
 */

const LayoutApp = ({ children, renderNavMobile }: Props) => {
  const router = useRouter();
  const isSendPath = router.pathname === "/share";

  // Determine if viewport isMobile
  const [ref, { width }] = useMeasure();
  const [isMobile, setIsMobile] = useState(false);

  // `setIsMobile` once only on initial page load in production mode
  // …but we add width to deps for local development
  useEffect(() => {
    if (width < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  // Reset DropdownMenuControlled on route change
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => setIsOpen(false), [router.asPath]);

  return (
    <>
      {/* NAVBAR */}
      {!isSendPath && (
        <div ref={ref} tw="fixed top-0 left-0 right-0 bg-background">
          <div tw="mx-auto max-w-canvasWidth">
            <Navbar />
          </div>
          <hr />
        </div>
      )}

      {/* CONTENT */}
      <div
        css={[
          tw`flex flex-col mx-auto max-w-canvasWidth`,
          !isSendPath && tw`pt-navHPlusPx`,
        ]}
      >
        {children}
      </div>

      {/* MOBILE NAV */}
      {renderNavMobile && !isSendPath && isMobile && (
        <div tw="fixed bottom-inset right-0">
          <div tw="px-inset h-navH">
            <DropdownMenuControlled
              onOpenChange={setIsOpen}
              open={isOpen}
              align="end"
              alignOffset={0}
              side="top"
              sideOffset={9}
              variant="minor"
              buttonNode={
                <button
                  css={[
                    styledNavButton,
                    tw`h-[40px] w-[40px] rounded-full shadow-xl`,
                    styledTrigger,
                  ]}
                  aria-label="Main menu"
                  type="button"
                >
                  <Icon icon="radix-icons:hamburger-menu" height="1.5em" />
                </button>
              }
            >
              <Stack tw="gap-w4 lg:gap-7">
                <NavAsideContent />
              </Stack>
            </DropdownMenuControlled>
          </div>
        </div>
      )}

      {/* MOBILE TYPEFORM */}
      {renderNavMobile && !isSendPath && isMobile && (
        <div tw="fixed bottom-inset left-0">
          <div tw="px-inset h-navH flex items-center">
            <NavAsideBetaTypeformMobile />
          </div>
        </div>
      )}
    </>
  );
};

export { LayoutApp };
