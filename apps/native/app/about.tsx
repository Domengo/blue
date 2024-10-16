import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function Page() {
  return (
    <Link href="/" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
  );
}