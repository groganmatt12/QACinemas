import React from 'react';
import CinemaStore from './store/CinemaStore';
import Checkbox from './Checkbox';

export default class Sort extends React.Component{
	constructor(props){
		super(props);
		this.handleMovieSearchChange = this.handleMovieSearchChange.bind(this);
        
        this.state = {
            genres: [],
            genre_objects: [],
            genre_array: []
        }
	}
	
	handleMovieSearchChange(){
		this.props.onUserSearchInput(this.filterTextInput.value);
        /*this.generateCheckboxes();*/
	}
    
    
    generateCheckboxes() {
        let genreList = Array.from(CinemaStore.getGenreList());
        console.log(genreList);
        this.setState({ genres: genreList});
        
        let displayArray = [];

        for(let i = 0; i<genreList.length; i++){
            let genreName = genreList[i];
            console.log(genreList[i]);
            displayArray.push(
                <Checkbox label={genreName} key={genreName} handleCheckboxChange={this.onToggle.bind(this)} />
            );
        }
        this.setState({ genre_objects: displayArray });
    }

    componentWillMount() {
        this.generateCheckboxes();
    }
	
    onToggle(label, checkState){
        let check = false;
        let tempArray = this.state.genre_array;

        if(checkState == true){

            if(tempArray != null){

                for(let i = 0; i<tempArray.length; i++){
                    if(tempArray[i] != label){
                        check = true;
                    }
/*                    else{
                        check = false;
                        console.log(tempArray[i] +"equals"+label);
                        tempArray.splice(i, 1);
                        console.log(tempArray);
                        break;
                    }*/
                }
            }

            if(check == true || tempArray.length == 0){
                tempArray.push(label);
                this.setState({genre_array: tempArray});
                console.log(tempArray);
            }
        }
        
        if(checkState == false){
            console.log(checkState);
            for(let i = 0; i<tempArray.length; i++){
                if(tempArray[i] != label){
                    check = true;
                }
                else{
                    check = false;
                    console.log(tempArray[i]+"equals"+label);
                    tempArray.splice(i, 1);
                    console.log(tempArray);
                    break;
                }
            }
        }
        
        this.props.onGenreCheckInput(tempArray);
    }


    render(){
        return(
            <div className="sort-bar col-md-6 col-md-offset-3">

			<button type="button" className="btn btn-info btn-block" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
				<div id="demo" className="collapse">
				<div className="panel panel-default">
					<div className="panel-body">
					<form>
						<input 
							type='text'
							placeholder='search for movies'
							value={this.props.filterText}
							ref={(input) => this.filterTextInput = input}
							onChange = {this.handleMovieSearchChange}
						/>
                        <div>
                            <h4>Filter by Genre...</h4>
                            {this.state.genre_objects}
                        </div>

					</form>
					</div>
				</div>
				</div>
			</div>
        );
    }
}