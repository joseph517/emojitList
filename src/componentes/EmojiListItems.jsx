import React from 'react'
import { EmojiItem } from './EmojiItems'



export default function EmojiListItems(props) {
    return (
        <div className='row'>
            {
                props.datos.map((emoji) => {
                    return (
                        <div className="col-3" key={emoji.title}>
                            <EmojiItem
                                title={emoji.title}
                                symbol={emoji.symbol}
                                keywords={emoji.keywords}
                            />
                        </div>
                    )
                })
            }
        </div>

    )
}
