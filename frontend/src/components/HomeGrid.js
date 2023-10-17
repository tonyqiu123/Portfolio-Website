import { useState, useEffect } from 'react';
import '../css/all.css';
import '../css/blog.css';
import '../css/home.css';
import git from '../images/icons/git.svg';
import figma from '../images/icons/figma.svg';
import urlLink from '../images/icons/urlLink.svg';

export default function HomeGrid({ name, gitLink, url, figmaLink, tools, span, bgImg }) {


    const toolsUI = tools.map((item, index) => {
        return <p className={item} key={index}>{item === "undefined" ? "" : item}</p>
    })


    return (

        <>


            <div className='grid column' style={{
                gridColumn: `span ${span}`,
                padding: '0'
            }}>
                <div className='grid-ImgCover' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                </div>
                <div className='column'>
                    <div className='grid-links row'>
                        <h3>{name}</h3>
                        {gitLink && <a target="_blank" href={gitLink}><img src={gitLink ? git : ''} /></a>}
                        {figmaLink && <a target="_blank" href={figmaLink}><img src={figmaLink ? figma : ''} /></a>}
                        {url && <a target="_blank" href={url}><img src={url ? urlLink : ''} /></a>}
                    </div>
                    <div className='grid-tools row'>
                        {toolsUI}
                    </div>
                </div>
            </div>
        </>

    )
}
