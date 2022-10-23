import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Logo from '../Logo/Logo';
import FormButtons from './component/FormButton';
import { communityList, list1, list2, list3, list4, list5 } from './data';
import { ColumnLinks, CopyrightLinkContainer, FooterColumnContainer, FooterCommunitySection, FooterContainer, FooterCopyrightBlock, FooterLinkColumn, FooterRow, FooterStyled, FooterSubscribeForm, FooterSubscribeFormContainer, FooterSubscribeHeading, FooterSubscribeText, FooterTextStyled, LinkColumnHeading, LinkColumnList, LinkColumnListItem, SubscribeButtonStyled, SubscribeFormInput, Text } from './style';

const Footer = () => {

    return (
        <FooterStyled>
            <Container>
                <FooterContainer>
                    <FooterRow>
                        <FooterSubscribeFormContainer>
                            <FooterSubscribeHeading variant='xs'>
                                Stay in the loop
                            </FooterSubscribeHeading>
                            <FooterSubscribeText variant='base'>
                                Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
                            </FooterSubscribeText>
                            <FooterSubscribeForm onSubmit={() => console.log("hello")}>
                                <SubscribeFormInput>
                                    <input type="text" placeholder='Your email address'/>
                                </SubscribeFormInput>
                                <SubscribeButtonStyled type="submit">
                                    Sign up
                                </SubscribeButtonStyled>
                            </FooterSubscribeForm>
                        </FooterSubscribeFormContainer>
                        <FooterCommunitySection>
                            <FooterSubscribeHeading variant='xs'>
                                Join the community
                            </FooterSubscribeHeading>
                            <Box>
                                {
                                    communityList.map(el => <FormButtons key="" logo={el.logo} link={el.link} />)
                                }
                            </Box>
                        </FooterCommunitySection>
                    </FooterRow>
                    <FooterRow className='footer-row'>
                        <FooterTextStyled className='footer-quarter'>
                            <Logo ml={true} />
                            <Text>
                                The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                            </Text>
                        </FooterTextStyled>
                        <FooterColumnContainer className='footer-three-quarter'>
                            <FooterLinkColumn>
                                <LinkColumnHeading>Marketplace</LinkColumnHeading>
                                <LinkColumnList>
                                    {
                                        list1.map(el => <LinkColumnListItem key="">
                                            <ColumnLinks href={el.link}>{el.value}</ColumnLinks>
                                        </LinkColumnListItem>)
                                    }
                                </LinkColumnList>
                            </FooterLinkColumn>
                            <FooterLinkColumn>
                                <Box>
                                    <LinkColumnHeading>My Account</LinkColumnHeading>
                                    <LinkColumnList>
                                        {
                                            list2.map(el => <LinkColumnListItem key="">
                                                <ColumnLinks href={el.link}>{el.value}</ColumnLinks>
                                            </LinkColumnListItem>)
                                        }
                                    </LinkColumnList>
                                </Box>
                                <Box sx={{ marginTop: '50px' }}>
                                    <LinkColumnHeading>Stats</LinkColumnHeading>
                                    <LinkColumnList>
                                        {
                                            list3.map(el => <LinkColumnListItem key="">
                                                <ColumnLinks href={el.link}>{el.value}</ColumnLinks>
                                            </LinkColumnListItem>)
                                        }
                                    </LinkColumnList>
                                </Box>
                            </FooterLinkColumn>
                            <FooterLinkColumn>
                                <LinkColumnHeading>Resources</LinkColumnHeading>
                                <LinkColumnList>
                                    {
                                        list4.map(el => <LinkColumnListItem key="">
                                            <ColumnLinks href={el.link}>{el.value}</ColumnLinks>
                                        </LinkColumnListItem>)
                                    }
                                </LinkColumnList>
                            </FooterLinkColumn>
                            <FooterLinkColumn>
                                <LinkColumnHeading>Company</LinkColumnHeading>
                                <LinkColumnList>
                                    {
                                        list5.map(el => <LinkColumnListItem key="">
                                            <ColumnLinks href={el.link}>{el.value}</ColumnLinks>
                                        </LinkColumnListItem>)
                                    }
                                </LinkColumnList>
                            </FooterLinkColumn>
                        </FooterColumnContainer>
                    </FooterRow>
                    <FooterCopyrightBlock>
                        <p>© 2018 - 2022 Ozone Networks, Inc</p>
                        <CopyrightLinkContainer>
                            <ColumnLinks href="/">Privacy Policy</ColumnLinks>
                            <ColumnLinks href="/">Terms of Service</ColumnLinks>
                        </CopyrightLinkContainer>
                    </FooterCopyrightBlock>
                </FooterContainer>
            </Container>
        </FooterStyled>
    )
}

export default Footer