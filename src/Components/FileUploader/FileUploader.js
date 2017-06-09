import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

export default class MyUploader extends Component {
    render() {
        return (
            <ImagesUploader
                url="http://127.0.0.1:5000/PostImages"
                optimisticPreviews
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload multiple images"
                />
        );
    }
}
