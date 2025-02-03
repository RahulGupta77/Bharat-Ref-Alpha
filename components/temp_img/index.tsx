import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const TempImage = () => {
  return (
    <Flex
      css={{
        gap: "$3",
        // px: "$6",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        "@sm": {
          flexDirection: "row",
          mt: "$20",
        },
      }}
      justify={"center"}
    >
      <Box
        css={{
          "& img": {
            width: "725px",
            objectFit: "contain",
          },
        }}
      >
        <img src="https://media.istockphoto.com/id/1348157796/vector/website-under-construction-page-web-page-under-construction-website-under-maintenance-page.jpg?s=612x612&w=0&k=20&c=vJCWlc0t7pZY3b41LciyKsXQAtcDlMqzq2M7zOsl5rI=" />
      </Box>
    </Flex>
  );
};
