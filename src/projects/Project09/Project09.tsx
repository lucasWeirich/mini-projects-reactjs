import { Icon } from '@mdi/react';
import { ProjectsProps } from '../../@types/projects.types'
import usePageTitle from '../../hook/usePageTitle'
import TemplateDefault from '../../templates/Default.template'
import * as CSS from './Project09.styles'
import { mdiFacebook, mdiTwitter, mdiYoutube } from '@mdi/js';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../assets/css/ButtonDefault';

export default function Project09({ title }: ProjectsProps) {
  usePageTitle('Increment Counter');

  const [twitterFollowers, setTwitterFollowers] = useState({ initial: 0, final: 7935 });
  const [youtubeSubscribers, setYoutubeSubscribers] = useState({ initial: 0, final: 6873 });
  const [facebookFans, setFacebookFans] = useState({ initial: 0, final: 2877 });

  function animateNumber(socialMedia: { initial: number; final: number; }, duration: number) {
    const [value, setValue] = useState(socialMedia.initial);
    const increment = (socialMedia.final - socialMedia.initial) / duration * 10;

    useEffect(() => {
      const timer = setTimeout(() => {
        setValue(value + increment);
      }, 10);

      if (value >= socialMedia.final) {
        clearTimeout(timer);
      }

      return () => {
        clearTimeout(timer);
      };
    }, [value, socialMedia.final]);

    return Math.round(value);
  }

  const animatedTwitterFollowers = animateNumber(twitterFollowers, 600);
  const animatedYoutubeSubscribers = animateNumber(youtubeSubscribers, 600);
  const animatedFacebookFans = animateNumber(facebookFans, 600);

  function handleFakeRequestData() {
    setTwitterFollowers(prev => {
      return {
        initial: prev.final,
        final: prev.final + 21
      }
    })
    setYoutubeSubscribers(prev => {
      return {
        initial: prev.final,
        final: prev.final + 3
      }
    })
    setFacebookFans(prev => {
      return {
        initial: prev.final,
        final: prev.final + 146
      }
    })
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Display>
        <CSS.Item>
          <Icon
            path={mdiTwitter}
            size='50px'
            color='var(--colorLight'
          />
          <div className='--number'>{animatedTwitterFollowers}</div>
          <h5>Twitter Followers</h5>
        </CSS.Item>

        <CSS.Item>
          <Icon
            path={mdiYoutube}
            size='50px'
            color='var(--colorLight'
          />
          <div className='--number'>{animatedYoutubeSubscribers}</div>
          <h5>YouTube Subscribers</h5>
        </CSS.Item>

        <CSS.Item>
          <Icon
            path={mdiFacebook}
            size='50px'
            color='var(--colorLight'
          />
          <div className='--number'>{animatedFacebookFans}</div>
          <h5>Facebook Fans</h5>
        </CSS.Item>
      </CSS.Display>

      <CSS.SubTitle>Simulation of a request for data from social networks</CSS.SubTitle>

      <ButtonDefault onClick={handleFakeRequestData}>
        Fake request with static values
      </ButtonDefault>
    </CSS.Wrapper>
  </TemplateDefault>
}