import React from 'react';
import { useForm } from '@formspree/react';

function Footer() {
    const [state, handleSubmit] = useForm('mayvjnze');

    return (
        <footer className='footer bg-map bg-dark'>
            <div className='container py-5 z-index-20'>
                <div className='row pt-5'>
                    <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <h6>Marketplace</h6>
                        <ul className='list-unstyled text-muted mb-0'>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/explore' rel='noreferrer'>
                                    All NFTs
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/categories/art' rel='noreferrer'>
                                    Art
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/categories/music' rel='noreferrer'>
                                    Music
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/categories/domainnames' rel='noreferrer'>
                                    Domain Names
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/categories/virtualworld' rel='noreferrer'>
                                    Virtual World
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/categories/trendingcards' rel='noreferrer'>
                                    Cards
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/categories/collectibles' rel ='noreferrer'>
                                Collectibles
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <h6>Resources</h6>
                        <ul className='list-unstyled text-muted mb-0'>
                          
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='https://docs.miniutopia.co' rel='noreferrer'>
                                    Docs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <h6>Community</h6>
                        <ul className='list-unstyled text-muted mb-0'>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='https://t.me/miniutopiatoken' rel='noreferrer'>
                                    Telegram 
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='https://twitter.com/miniutopiatoken' rel='noreferrer'>
                                    Twitter 
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4'>
                        <h6>Newsletter</h6>
                        <p className='text-sm text-muted'>
                            Would you like to learn more about us
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className='input-group shadow-sm bg-body rounded-sm'>
                                <input
                                    className='form-control border-0 bg-none shadow-0'
                                    type='email'
                                    name='email'
                                    autoComplete='off'
                                    placeholder='Enter your email address...'
                                />
                                <button className='btn btn-primary btn-sm' type='submit'>
                                    <i className='las la-paper-plane'></i>
                                </button>
                            </div>
                        </form>
                        {state.succeeded ? (
                            <p className='bg-primary text-white mt-1 px-3 py-1  rounded-sm'>Thanks!</p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='pt-1 bg-body rounded-pill'></div>
            </div>

            <div className='container py-4'>
                <div className='row text-center'>
                    <p className='text-muted text-sm mb-0'>
                        © 2022 All rights reserved. <i className='las la-xs text-primary la-heart'></i> by{' '}
                        <span className='text-primary'>Mini Utopia</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
