import React from 'react';
import CinemaStore from './store/CinemaStore';
import Checkbox from './Checkbox';
import CheckboxClass from './CheckboxClass';

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
			classification_array: [] /*will contain what's checked and unchecked */
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
                <Checkbox label={genreName} key={genreName} handleCheckboxChange={this.onToggleGenre.bind(this)} />
            );
        }
        this.setState({ genre_objects: displayArray });
    }

    componentWillMount() {
        this.generateCheckboxes();
		this.generateClassCheckbox();
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

	generateClassCheckbox(){
		let testArray = CinemaStore.generateClassList();
		this.setState({classifications: testArray});
		let arrayOfClassComponents = [];
		for(let i = 0; i < testArray.length; i++){
			let currentClass = testArray[i];
			arrayOfClassComponents.push(
				<CheckboxClass classification={currentClass} key={i} handleCheckBoxChange={this.onToggleClass.bind(this)}/>
			);
			this.setState({classification_objects: arrayOfClassComponents});
		}
	}
	
	onToggleClass(classification, checkState){
		let classificationArray = this.state.classification_array;
		let tempSet = new Set(classificationArray);
		if(checkState == true){
			tempSet.add(classification);
		}
		if(checkState == false){
			tempSet.delete(classification);
		}
		let classArray = Array.from(tempSet);
		this.setState({classification_array: classArray});
		console.log(this.state.classification_array);
		
		this.props.onClassCheckInput(classArray);
		
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
									<h4>Classification</h4>
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