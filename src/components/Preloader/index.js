import React from 'react';
import PropTypes from 'prop-types';

import './Preloader.css';

class Preloader extends React.Component {
    render() {
        return (
            <div
                className={`preloader ${this.props.className}`}
                style={{ width: this.props.size, height: this.props.size }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    style={{ fill: this.props.color }}
                >
                    <path
                        className="st1"
                        d="M31.1 0c1.8 0 3.1 1.3 3.1 3.1v12.2c0 1.8-1.3 3.2-3.1 3.2s-3.2-1.4-3.2-3.2V3.1C27.8 1.3 29.2 0 31.1 0z"
                    />
                    <path
                        className="st2"
                        d="M16.4 6.9l7.1 9.9c1.6 2.1 0 5.1-2.6 5.1-1 0-1.8-.4-2.5-1.3l-7.1-9.9c-1-1.4-.8-3.4.6-4.4s3.4-.8 4.5.6z"
                    />
                    <path
                        className="st3"
                        d="M2.2 26.5C.5 26-.4 24.2.1 22.5s2.3-2.6 4-2.1l11.6 3.8c1.7.5 2.6 2.3 2.1 4-.4 1.3-1.8 2.2-3.1 2.2-.4 0-.5-.1-.9-.3L2.2 26.5z"
                    />
                    <path
                        className="st4"
                        d="M17.8 36.8c.5 1.7-.4 3.5-2.1 4L4.2 44.6c-.4.1-.6.1-1 .1-1.3 0-2.6-.9-3-2.2-.5-1.7.4-3.5 2.1-4l11.6-3.8c1.6-.5 3.4.4 3.9 2.1z"
                    />
                    <path
                        className="st5"
                        d="M22.9 43.8c1.4 1 1.7 3 .6 4.4l-7.1 9.9c-.6.9-1.6 1.3-2.6 1.3-2.6 0-4-3-2.5-5.1l7.1-9.9c1.1-1.4 3-1.7 4.5-.6z"
                    />
                    <path
                        className="st6"
                        d="M31.1 46.4c1.8 0 3.1 1.4 3.1 3.2v12.1c0 1.8-1.3 3.2-3.1 3.2s-3.2-1.4-3.2-3.2V49.6c-.1-1.8 1.3-3.2 3.2-3.2z"
                    />
                    <path
                        className="st7"
                        d="M43.7 44.4l7.1 9.9c1.6 2.1 0 5.1-2.6 5.1-1 0-1.8-.4-2.5-1.3l-7.1-9.9c-1-1.4-.8-3.4.6-4.4s3.4-.8 4.5.6z"
                    />
                    <path
                        className="st8"
                        d="M59.9 38.4c1.7.5 2.6 2.3 2.1 4-.4 1.3-1.8 2.2-3.1 2.2-.4 0-.5 0-.9-.1l-11.6-3.8c-1.7-.5-2.6-2.3-2.1-4 .5-1.7 2.3-2.6 4-2.1l11.6 3.8z"
                    />
                    <path
                        className="st9"
                        d="M44.3 28.2c-.5-1.7.4-3.5 2.1-4L58 20.4c1.7-.5 3.5.4 4 2.1.5 1.7-.4 3.5-2.1 4l-11.6 3.6c-.4.1-.6.3-1 .3-1.3 0-2.6-.9-3-2.2z"
                    />
                    <path
                        className="st10"
                        d="M41.1 21.8c-2.6 0-4-3-2.5-5.1l7.1-9.9c1-1.4 3-1.7 4.4-.6 1.4 1 1.7 3 .6 4.4l-7.1 9.9c-.6.9-1.5 1.3-2.5 1.3z"
                    />
                </svg>
            </div>
        );
    }
}

Preloader.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number
};

Preloader.defaultProps = {
    className: '',
    color: '#ffae7e',
    size: 100
};

export default Preloader;
