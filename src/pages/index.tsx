import { useAtom } from "jotai";
import type { NextPage } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  CardHeaderVaultNoModules,
  DialogDrawerMenu,
  Flex,
  ModuleButton,
  PageVault,
  PopoverHelp,
  Text,
  TitleAndMetaTags,
} from "src/components";
import Login from "src/components/Login";
import {
  useGetModulesQuery,
  useGetUserModulesSubscription,
} from "src/graphql/generated";
import { userAtom, web3AuthUserInfoAtom } from "src/state";

const HomePage: NextPage = () => {
  const [user] = useAtom(userAtom);
  const [web3AuthUserInfo] = useAtom(web3AuthUserInfoAtom);

  console.log("user", user);
  console.log("webAuthUserInfo", web3AuthUserInfo);

  const { data: { modules } = {}, loading: isModulesLoading } =
    useGetModulesQuery();

  const { data: userModulesData, loading: isUserModulesDataLoading } =
    useGetUserModulesSubscription({
      variables: { userId: user?.id },
      skip: !user?.id,
    });

  const storedModuleIds = userModulesData?.usersModules
    ? userModulesData.usersModules.map((userModule) => userModule.moduleId)
    : [];

  const notStoredModules = modules?.filter(
    (module) => !storedModuleIds.includes(module.id),
  );

  // TODO: use storedModuleIds and notStoredModules
  console.log("notStoredModules", notStoredModules);

  const hasStoredModules = !!userModulesData?.usersModules?.length;

  // TODO: handle loading state
  if (isModulesLoading || isUserModulesDataLoading) {
    return <div>loading</div>;
  }

  return (
    <>
      <TitleAndMetaTags color="black" />

      <PageVault>
        {user && (
          <Flex tw="w-full flex-col gap-4">
            <Flex tw="relative items-end justify-between gap-1 text-gray-500 z-10">
              <Text as="h3" variant="heading">
                Your Data
              </Text>
              <PopoverHelp />
            </Flex>
            <hr />
            <div tw="grid grid-cols-3 grid-flow-col gap-4 min-h-[180px]">
              <DialogDrawerMenu buttonLabel="Add">
                <CardHeaderVaultNoModules>
                  {modules?.map((module) => (
                    <ModuleButton key={module.id} name={module.name} />
                  ))}
                </CardHeaderVaultNoModules>
              </DialogDrawerMenu>
              {/* FAKE DATA MODULE */}
              {hasStoredModules && (
                <ModuleButton
                  key="instagram"
                  name="instagram"
                  isLarge
                  isStored
                />
              )}
            </div>
          </Flex>
        )}
        <Login />
      </PageVault>
    </>
  );
};

export default HomePage;