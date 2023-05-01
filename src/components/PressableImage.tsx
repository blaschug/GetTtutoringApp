// import React from 'react';
// import {
//   Alert,
//   Image,
//   ImageStyle,
//   Pressable,
//   StyleProp,
//   ViewStyle,
// } from 'react-native';

// interface PressableImageProps {
//   styles: {
//     view: StyleProp<ViewStyle>;
//     image: StyleProp<ImageStyle>;
//   };
//   source: string;
// }

// function PressableImage(props: PressableImageProps) {
//   const isUrl = props.source.startsWith('http');

//   return (
//     <Pressable
//       style={props.styles.view}
//       onPress={() => Alert.prompt('hola', 'adios')}>
//       {}
//       <Image
//         style={props.styles.image}
//         source={isUrl ? {uri: props.source} : require(props.source)}
//       />
//     </Pressable>
//   );
// }

// export default PressableImage;
