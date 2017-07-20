import React from 'react';
import CinemaStore from './store/CinemaStore';
import Checkbox from './Checkbox';
import CheckboxClassification from './CheckboxClassification';

export default class Sort extends React.Component{
	constructor(props){
		super(props);
		this.handleMovieSearchChange = this.handleMovieSearchChange.bind(this);
        
        this.state = {
            genres: [],
            genre_objects: [],
            genre_array: [],

            classifications: [],
            classification_objects: [],
            classification_array: []
        };

	}
	
	componentWillMount() {
        this.generateCheckboxes();
        this.generateClassificationCheckbox();

    }
	
	handleMovieSearchChange(){
		this.props.onUserSearchInput(this.filterTextInput.value);
	}    
   

	generateCheckboxes() {
		let arrayOfRequiredGenres = [];
		let genreName = [];
        let arrayOfGenres = Array.from(CinemaStore.getArrayOfGenres()); /*Save the Genre List*/
        this.setState({ genres: arrayOfGenres}); /*Cannot be used here, as it is not saved fast enough*/

		for(let i = 0; i < arrayOfGenres.length; i++){
            arrayOfRequiredGenres.push(
                <Checkbox label={arrayOfGenres[i]} key={arrayOfGenres[i]} handleCheckboxChange={this.onToggleGenre.bind(this)} />
            );
        }

        this.setState({ genre_objects: arrayOfRequiredGenres });
    }
	
	
/*------------------------------------*/


    generateClassificationCheckbox(){
        let testArray = CinemaStore.generateClassificationList();
        this.setState({classifications: testArray});

        let arrayOfClassificationComp = [];
        for(let i = 0; i<testArray.length; i++){
            let curClassification = testArray[i];
            arrayOfClassificationComp.push(
                <CheckboxClassification classification={curClassification} key={i+curClassification} handleCheckboxChange={this.onToggleClassification.bind(this)}/>
            );
        }
        this.setState({classification_objects: arrayOfClassificationComp});
    }

    onToggleClassification(classification, checkState){

        let tempArray = this.state.classification_array;
        let tempSet = new Set(tempArray);

        if(checkState === true){
            tempSet.add(classification);
        }
        if(checkState === false){
            tempSet.delete(classification);
        }
        
        let newArray = Array.from(tempSet);
        this.setState({classification_array: newArray}, () => console.log(this.state.classification_array));

        this.props.onClassificationCheckInput(newArray);
    }

	onToggleGenre(label, checkState){
		let check = false;
        let tempArray = this.state.genre_array;

        if(checkState == true){

            if(tempArray != null){
                for(let i = 0; i<tempArray.length; i++){
                    if(tempArray[i] != label){
                        check = true;
                    }
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
                        <div>
                            <h4>Classifications</h4>
                            {this.state.classification_objects}
                        </div>
					</form>
					</div>
				</div>

				</div>
			</div>
        );
    }
}