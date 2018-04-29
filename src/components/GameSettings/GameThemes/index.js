import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';

import Option from './Option/index';

import './GameThemes.css';

const b = b_.with('game-themes');

class GameThemes extends React.Component {
    render() {
        const { state, onChange } = this.props;

        return (
            <section className={b()}>
                <div className={b('wrapper')}>
                    <p className={b('label')}>Просто</p>
                    <div className={b('optgroup')}>
                        <Option id="0_1" onChange={onChange} val={2} state={state} className={b('option')}/>
                        <Option id="0_2" onChange={onChange} val={3} state={state} className={b('option')}/>
                        <Option id="0_3" onChange={onChange} val={4} state={state} className={b('option')}/>
                        <Option id="0_4" onChange={onChange} val={5} state={state} className={b('option')}/>
                        <Option id="0_5" onChange={onChange} val={6} state={state} className={b('option')}/>
                        <Option id="0_6" onChange={onChange} val={7} state={state} className={b('option')}/>
                        <Option id="0_7" onChange={onChange} val={8} state={state} className={b('option')}/>
                        <Option id="0_8" onChange={onChange} val={9} state={state} className={b('option')}/>
                    </div>
                </div>
                <div className={b('wrapper')}>
                    <p className={b('label')}>Друг</p>
                    <div className={b('optgroup', { reversed: true, padded: true })}>
                        <Option id="1_0" onChange={onChange} val={1} state={state} className={b('option')}/>
                        <Option id="1_1" onChange={onChange} val={2} state={state} className={b('option')}/>
                        <Option id="1_2" onChange={onChange} val={3} state={state} className={b('option')}/>
                        <Option id="1_3" onChange={onChange} val={4} state={state} className={b('option')}/>
                    </div>
                </div>
                <div className={b('wrapper')}>
                    <p className={b('label')}>Брат</p>
                    <div className={b('optgroup', { reversed: true })}>
                        <Option id="2_0" onChange={onChange} val={1} state={state} className={b('option')}/>
                        <Option id="2_1" onChange={onChange} val={2} state={state} className={b('option')}/>
                        <Option id="2_2" onChange={onChange} val={3} state={state} className={b('option')}/>
                        <Option id="2_3" onChange={onChange} val={4} state={state} className={b('option')}/>
                        <Option id="2_4" onChange={onChange} val={5} state={state} className={b('option')}/>
                        <Option id="2_5" onChange={onChange} val={6} state={state} className={b('option')}/>
                        <Option id="2_6" onChange={onChange} val={7} state={state} className={b('option')}/>
                        <Option id="2_7" onChange={onChange} val={8} state={state} className={b('option')}/>
                        <Option id="2_8" onChange={onChange} val={9} state={state} className={b('option')}/>
                    </div>
                </div>
                <div className={b('wrapper')}>
                    <p className={b('label')}>Друг+Брат</p>
                    <div className={b('optgroup')}>
                        <Option id="3_5" onChange={onChange} val={6} state={state} className={b('option')}/>
                        <Option id="3_6" onChange={onChange} val={7} state={state} className={b('option')}/>
                        <Option id="3_7" onChange={onChange} val={8} state={state} className={b('option')}/>
                        <Option id="3_8" onChange={onChange} val={9} state={state} className={b('option')}/>
                    </div>
                </div>
            </section>
        );
    }
}

GameThemes.propTypes = {
    state: PropTypes.shape({
        options: PropTypes.object,
        speed: PropTypes.number,
        capacity: PropTypes.number,
        quantity: PropTypes.number
    }).isRequired,
    onChange: PropTypes.func.isRequired
};

export default GameThemes;
