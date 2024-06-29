"use client";

import { ChakraProvider } from "@chakra-ui/react";

const CharkraUiProvider = ({ children }: { children: React.ReactNode }) => {
    return <ChakraProvider>{children}</ChakraProvider>;
};

export default CharkraUiProvider;
