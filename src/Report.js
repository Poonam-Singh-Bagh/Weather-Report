import React from 'react'

function Report() {
    return (
        <div>
            {/* <input type="text" name="countries" placeholder="enter a country" /><br /><br />
            <input type="submit" /> */}
            {/* <div class="custom-file">
            <input type="text" class="custom-file-input" id="inputGroupFile04" />
            <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
            </div>
            <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Button</button>
            </div> */}
            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <input type="text" class="form-control" placeholder="enter country" aria-label="" aria-describedby="basic-addon1" />
            </div>
            <button class="btn btn-outline-secondary" type="button">Submit</button>
            </div>
        </div>
    )
}

export default Report