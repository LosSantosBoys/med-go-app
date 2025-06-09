import { ComponentProps } from 'react';
import { TextInput } from 'react-native';

export type InputCpfProps = ComponentProps<typeof TextInput>;

export type UseInputCpfProps = {
  onChangeText: ((text: string) => void) | undefined
}
