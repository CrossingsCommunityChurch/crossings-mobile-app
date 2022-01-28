import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { OnboardingSwiper } from '@apollosproject/ui-onboarding';
import { named } from '@apollosproject/ui-kit';

import Features from './Features';
import Read from './Read';
import Pray from './Pray';

function LandingSwiper() {
  const navigation = useNavigation();
  const slides = [Features, Read, Pray];

  return (
    <OnboardingSwiper
      onComplete={() => {
        navigation.navigate('Auth');
      }}
    >
      {({ swipeForward }) => (
        <>
          {slides.map((Slide) => (
            <Slide key={Slide.displayName} onPressPrimary={swipeForward} />
          ))}
        </>
      )}
    </OnboardingSwiper>
  );
}

export default named('ui-onboarding.LandingSwiper')(LandingSwiper);
