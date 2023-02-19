import React from 'react';
//import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Trịnh Gia',
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/b/0/6/8b06c3c523c6bb6b1c52d8b62c75823f.jpg"
        },
        {
            id: 2,
            name: 'Keo Bong Gon',
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/6/7/f/c/67fc99471e4c9b29cb00238a101624d1.jpg"
        },
        {
            id: 3,
            name: 'Song Gio',
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/0/e/6/80e6bd68d6bbafc06e7cc744a6ece067.jpg"
        },
        {
            id: 4,
            name: 'Vi Me Anh Bat Chia Tay',
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/8/1/1/d811d20bdd4c40e9587021d4b7496d66.jpg"
        },
    ]
    return (
        <div>
            <h2>4 bai nhac tieu bieu</h2>
            <AlbumList albumList = {albumList} />
        </div>
    );
}

export default AlbumFeature;