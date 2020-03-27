const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon')
const Project = require('../app/project.js');

describe('Project Test', () => {

    const project = new Project()

    context('Expect', () => {
        it('tries expect', () => {
            expect(project.testFunction()).to.equal(1)
        })
    })






    context('Mock', () => {
        it('tries mock', () => {
            const projectMock = sinon.mock(project);

            projectMock.expects('mockFunction').withArgs();

            expect(project.testFunction()).to.equal(1)
            projectMock.verify();
        })
    })

    context('Stub', () => {
        it('tries stubs', () => {
            const projectStub = sinon.stub(project,'stubFunction').returns(false);
            expect(project.testFunction()).to.equal(false)
        })
    })

    context('Excepction', () => {
        it('tries to catch execptions', () => {

            expect(project.exceptionFunction.bind(project)).to.throw('Exception Catch');

        })
    })
})
