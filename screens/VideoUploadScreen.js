// // VideoUploadScreen.js

// import React, { useState } from 'react';
// import { View, Button, Image, StyleSheet } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

// const VideoUploadScreen = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const pickVideo = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.video],
//       });

//       if (!result.cancelled) {
//         setSelectedVideo(result.uri);
//       }
//     } catch (error) {
//       console.error('Error picking video:', error);
//     }
//   };

//   const uploadVideo = async () => {
//     if (!selectedVideo) {
//       console.error('Please select a video');
//       return;
//     }

//     // Implement your upload logic here using the selectedVideo URI

//     // For demonstration purposes, log the selected video URI
//     console.log('Selected Video URI:', selectedVideo);
//   };

//   return (
//     <View style={styles.container}>
//       {selectedVideo && (
//         <Image source={{ uri: selectedVideo }} style={styles.video} />
//       )}
//       <Button title="Pick a video" onPress={pickVideo} />
//       {selectedVideo && (
//         <Button title="Upload Video" onPress={uploadVideo} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     width: 300,
//     height: 200,
//     marginVertical: 20,
//   },
// });

// export default VideoUploadScreen;
