import React from 'react';
import './Languages.css';

function Languages(props) {
    const data = [
        {title: 'Languages', contents: ["Armenian", "Russian", "English"]},
        {title: 'Tools', contents: ["Vscode", "WebStorm"]},
    ]
    return (
        <section id={'languages'} data-aos="fade">
            {data.map(item => (
                <div className={'languages-box'} key={item.title}>
                    <h3>{item.title}</h3>
                    <ul>
                        {
                            item.contents.map(content => (
                                <li key={content}>{content}</li>
                            ))
                        }
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Languages;