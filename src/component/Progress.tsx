import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Icon, Layout, Text} from '@ui-kitten/components';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

interface ProgressProps {
  current: number;
  max: number;
  color: {
    tint: string;
    secondary?: string;
    background: string;
  };
}

export const Progress: React.FC<ProgressProps> = ({current, max, color}) => {
  const progress = Math.round((current / max) * 100);
  const animation = new Animated.Value(progress);
  const animatedColor = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['#FFC7A9', '#FF4128'],
  });
  const currentColor = JSON.stringify(animatedColor).replace(/"/g, '');
  const styles = StyleSheet.create({
    content: {
      position: 'relative',
      top: -5,
      alignItems: 'center',
    },
    icon: {
      width: 35,
      height: 35,
    },
    label: {
      fontSize: 11,
      color: currentColor,
    },
  });
  return (
    <AnimatedCircularProgress
      size={120}
      width={7}
      fill={progress}
      tintColor={color.tint}
      tintColorSecondary={color.secondary}
      backgroundColor={color.background}
      arcSweepAngle={240}
      rotation={240}
      lineCap="round">
      {() => (
        <Layout style={styles.content}>
          <Icon
            style={styles.icon}
            fill={currentColor}
            name="heart"
          />
          <Text style={styles.label} category="s2">
            {current} / {max}
          </Text>
        </Layout>
      )}
    </AnimatedCircularProgress>
  );
};
