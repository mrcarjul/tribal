import { Box, HStack } from "native-base";
import { ArrowBackButton, Title } from "../atoms";

type HeaderProps = {
  allowBack?: boolean;
  title: string;
  rightComponent?: React.ReactNode;
};

export const Header = ({ allowBack, title, rightComponent }: HeaderProps) => {
  return (
    <>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={3}
        w="100%"
        safeAreaTop
        testID="header-component"
      >
        {allowBack && <ArrowBackButton />}
        <Title text={title} />
        {typeof rightComponent !== "undefined" ? (
          rightComponent
        ) : (
          <Box size={10} />
        )}
      </HStack>
    </>
  );
};
