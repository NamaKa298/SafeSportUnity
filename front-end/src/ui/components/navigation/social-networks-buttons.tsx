

import { Button } from '@/ui/design-system/button/button';
import { footerSocialNetworksLinks } from './app-links';
import { v4 as uuidv4 } from 'uuid';

export const SocialNetworksButtons = () => {

    const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
        key={uuidv4()}
        variant="ico"
    />

    ))

return (
    <></>
)
}