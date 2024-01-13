import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import { GITHUB_URL, LINKDIN_URL, WHATSAPP_URL } from '@/config';

export const Navbar = () => (
  <Flex
    flexDirection="column"
    width="20rem"
    alignItems="center"
    justifyContent="space-around"
    boxShadow="primary"
    height="100vh"
  >
    <Box bg="#fff" width="10rem" height="10rem" borderRadius="100%" />

    <Flex flexDirection="column" textAlign="center" gap="1rem">
      <Link href="sobre">
        <Text>Sobre</Text>
      </Link>

      <Link href="projetos">
        <Text>Projetos</Text>
      </Link>

      <Link href="experiencias">
        <Text>Experiências</Text>
      </Link>

      <Link href="habilidades">
        <Text>Habilidades</Text>
      </Link>
    </Flex>

    <Flex gap="1rem">
      <Link href={WHATSAPP_URL} target="_blank">
        <FaWhatsapp fontSize="1.6rem" />
      </Link>

      <Link href={GITHUB_URL} target="_blank">
        <FaGithub fontSize="1.6rem" />
      </Link>

      <Link href={LINKDIN_URL} target="_blank">
        <FaLinkedin fontSize="1.6rem" />
      </Link>
    </Flex>
  </Flex>
);
